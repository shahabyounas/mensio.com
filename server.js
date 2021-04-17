const express = require('express');
const path = require('path');
require('./db')
const cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema


/**
 * Item Schema
 */
const Item = new Schema({
    title: String,
    isCompleted: {type: Boolean, default: false},
    isDeleted: {type: Boolean, default: false},
    date: { type: Date, default: Date.now() }
});

const ItemModel = mongoose.model('Items', Item);

const app = express();


app.use(cors());
app.use(express.json({
    type: ['application/json', 'text/plain']
}));

app.use(express.static(path.join(__dirname, './client/build')));



app.get('/', (req, res) => res.send("Server is up and running"));


app.get('/item', async (req, res) => {
    const findAllItems = await ItemModel.find({ isDeleted: false });
    return res.send(findAllItems);
});

app.post('/item', async (req, res) => {
    const item = new ItemModel();
    item.title = req.body.title;

    const itemSaved = await item.save();

    return res.send(itemSaved)
});

app.put('/item', async (req, res) => {
    const updateItem =  await ItemModel.updateOne({_id: req.body._id}, { isCompleted: true})
	return res.send(updateItem);
});

app.delete('/item', async(req, res) => {
    //softDelete
    const deleteItem =  await ItemModel.updateOne({_id: req.body._id}, { isDeleted: true})
	return res.send(deleteItem);
});

app.delete('/items', async(req, res) => {
    //softDelete
    const deleteAllItems =  await ItemModel.deleteMany({});
	return res.send(deleteAllItems);
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, './client/build', 'index.html'));
  });

app.options('*', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Add other headers here
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE'); // Add other methods here
    res.send();
  });


const PORT = 8000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
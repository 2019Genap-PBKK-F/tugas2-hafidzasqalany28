var sql = require("express");
var sql = require("mssql");

var data = [
    { name: 'id', sqltype: sql.Int, value: req.params.id },
    { name: 'nrp', sqltype: sql.VarChar, value: req.body.nrp },
    { name: 'nama', sqltype: sql.VarChar, value: req.body.nama },
    { name: 'angkatan', sqltype: sql.VarChar, value: req.body.angkatan },
    { name: 'jenis_kelamin', sqltype: sql.VarChar, value: req.body.jenis_kelamin },
    { name: 'lahir', sqltype: sql.Char, value: req.body.lahir },
    { name: 'foto', sqltype: sql.VarChar, value: req.body.foto },
    { name: 'aktif', sqltype: sql.Bit, value: req.body.aktif }
  ]

module.exports = data;
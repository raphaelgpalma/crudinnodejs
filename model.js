const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

const Endereco = sequelize.define(
    'Endereco',
    {
        Id: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
    
    
        Cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    
        Logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    
        Numero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
  
   
        Complemento: {
            type: DataTypes.STRING,
            allowNull: false
        },
   
    
        Bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        Cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
        Estado: {
            type: DataTypes.STRING,
            allowNull: false
        },
   
        MunicipioIBGE: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        modelName: 'Endereco',
        tableName: 'enderecos',
        timestamps: true,
    }
    
);
module.exports
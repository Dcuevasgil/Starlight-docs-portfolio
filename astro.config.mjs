import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guías',
					items: [
						{ 
							label: 'Instalacion Node', 
							slug: 'guías/instalar-node' 
						},
						{
							label: 'Configuracion de Node.js',
							slug: 'guías/configuracion'
						},
						{
							label: 'Tecnologías usadas',
							slug: 'guías/tecnologias-usadas'
						}
					],
				},
				{
					label: 'Herramientas usadas durante el proceso',
					items: [
						{
							label: 'Github',
							slug: 'herramientas/github'
						},
						{
							label: 'Visual Studio Code',
							slug: 'herramientas/vscode'
						}
					]
				},
				{
					label: 'Recursos e Imágenes',
					items: [
						{
							label: 'Imagenes',
							slug: 'imagenes/imagenes-proyecto'
						},
					]
				},
				{
					label: 'Componentes que he utilizado en el proyecto',
					items: [
						{
							label: 'Cabecera',
							slug: 'proyecto/header'
						},
						{
							label: 'Menu',
							slug: 'proyecto/menu'
						},
						{
							label: 'Sobre mi',
							slug: 'proyecto/sobre-mi'
						},
						{
							label: 'Habilidades',
							slug: 'proyecto/habilidades'
						},
						{
							label: 'Experiencia',
							slug: 'proyecto/experiencia'
						},
						{
							label: 'Proyectos',
							slug: 'proyecto/proyectos'
						},
						{
							label: 'Formacion',
							slug: 'proyecto/formacion'
						},
						{
							label: 'Referencias',
							slug: 'proyecto/referencias'
						},
						{
							label: 'Contacto',
							slug: 'proyecto/contacto'
						},
					]
				},
				{
					label: 'Reference',
					autogenerate: { 
						directory: 'reference' 
					},
				},
			],
		}),
	],
});

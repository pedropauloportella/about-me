export const profile = {
	fullName: 'Pedro Paulo Neves Portella',
	title: 'Diretor de Tecnologia',
	institute: 'Instituto Poder Computacional',
	author_name: 'Pedro Paulo Neves Portella', // Author name to be highlighted in the papers section
	research_areas: [
		{
			title: 'Computação Científica',
			description: 'Aplicação de métodos computacionais para modelagem matemática, simulações, análise de dados científicos e visualização de fenômenos complexos.',
			field: 'Computação Científica'
  		},
		{
			title: 'Inteligência Artificial Aplicada',
			description: 'Desenvolvimento e aplicação de técnicas de inteligência artificial em sistemas web, educacionais e de automação, incluindo recomendação, análise de dados e assistentes inteligentes.',
			field: 'Inteligência Artificial'   
		},
		{
			title: 'Engenharia de Computação',
			description: 'Integração entre hardware e software para o desenvolvimento de sistemas computacionais completos, incluindo sistemas embarcados, arquitetura de computadores, eletrônica digital e soluções computacionais aplicadas.',
			field: 'Engenharia de Computação'
		},
		{
			title: "Computação Aplicada à Educação (EdTech)", 
			description: "Pesquisa sobre uso de tecnologias digitais no ensino, incluindo gamificação, plataformas educacionais, aprendizado adaptativo e ferramentas para ensino de STEM.",
			field: "Tecnologia Educacional"   
		}
	]
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'pedropauloportella@ufrj.br',
	linkedin: '',
	x: 'https://www.x.com/',
	bluesky: '',
	github: 'https://github.com/pedropauloportella',
	gitlab: '',
	scholar: 'https://scholar.google.com.br/citations?user=5u2igEsAAAAJ&hl=pt-BR',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0009-0004-6406-9346'
}

export const template = {
	website_url: 'https://pedropauloportella.github.io/about-me/', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '/about-me' // Repository name starting with /
}

export const seo = {
	default_title: 'Pedro Paulo Neves Portella',
	default_description: 'Discente em Licenciatura em Física na Universidade Federal do Rio de Janeiro (UFRJ) e graduando em Engenharia de Computação na Universidade Estácio de Sá (UNESA), possui formação técnica em Eletrônica(IETAAM), com registro ativo no Conselho Federal de Técnicos (CFT). Atuou como professor de Cálculo Técnico e Tecnologia na Escola Rural São Vicente de Paulo, onde contribuiu para a formação de centenas de estudantes do ensino fundamental I e II, nas áreas de Ciência, Tecnologia, Engenharia e Matemáticas(STEM). Membro do Clube de Engenharia do Brasil, participa ativamente de iniciativas que promovem o desenvolvimento profissional e a troca de conhecimentos técnicos. Atua como consultor de TI, Computação Científica e Ciência Aberta em grupos de pesquisa e novos empreendimentos, desenvolvendo soluções inovadoras para vencer os desafios do século 21. É egresso do programa "NASA Open Science", atuando como instrutor de estudantes e pesquisadores nas práticas de ciência aberta. Além de ser desenvolvedor de software, cria soluções computacionais que visam facilitar processos e otimizar resultados. Também integra a rede de empreendimentos sustentáveis da aceleradora Shell Iniciativa Jovem, comprometendo-se com o desenvolvimento de práticas que respeitam o meio ambiente e promovem a sustentabilidade e a equidade social..',
	default_image: '/src/assets/profile_pictures.jpg',
}

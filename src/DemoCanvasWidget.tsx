import * as React from 'react';
import styled from '@emotion/styled';

// eslint-disable-next-line @typescript-eslint/no-namespace
//namespace S {
	export const Container = styled.div<{ color: string; background: string }>`
		height: 100%;
		background-color: rgb(60, 60, 60) !important;
		background-size: 50px 50px;
		display: flex;
		> * {
			height: 100%;
			min-height: 100%;
			width: 100%;
		}
		background-image: linear-gradient(
				0deg,
				transparent 24%,
				${p => p.color} 25%,
				${p => p.color} 26%,
				transparent 27%,
				transparent 74%,
				${p => p.color} 75%,
				${p => p.color} 76%,
				transparent 77%,
				transparent
			),
			linear-gradient(
				90deg,
				transparent 24%,
				${p => p.color} 25%,
				${p => p.color} 26%,
				transparent 27%,
				transparent 74%,
				${p => p.color} 75%,
				${p => p.color} 76%,
				transparent 77%,
				transparent
			);
	`;
//} 

export class DemoCanvasWidget extends React.Component {
	render() {
		return (
			<Container
				background={'rgb(60, 60, 60)'}
				color={'rgba(255,255,255, 0.05)'}>
				{this.props.children}
			</Container>
		);
	}
}
import produce from 'immer';
import create from 'zustand';

const useStore = create((setStore) => ({
	fullscreen: false,

	setStore: (fn) => setStore(produce(fn)),
}));

export default useStore;

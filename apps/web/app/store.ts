import { create } from "zustand";

type Step = "landing" | "setup";

type GlobalStore = {
  isStartingSetup: boolean;
  currentStep: Step;
  startSetup: () => void;
  goToSetup: () => void;
  goToLanding: () => void;
};

export const useGlobalStore = create<GlobalStore>((set) => ({
  isStartingSetup: false,
  currentStep: "landing",
  startSetup: () => {
    set({ isStartingSetup: true });
  },
  goToSetup: () => {
    set({ currentStep: "setup", isStartingSetup: true });
  },
  goToLanding: () => {
    set({ currentStep: "landing", isStartingSetup: false });
  },
}));

package com.swmansion.reanimated.layoutReanimation;

import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.ViewManagerRegistry;
import com.facebook.yoga.YogaDirection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class ReanimatedNativeHierarchyManagerBase extends NativeViewHierarchyManager {
    public ReanimatedNativeHierarchyManagerBase(ViewManagerRegistry viewManagerRegistry) {
        super(viewManagerRegistry);
    }

    @Override // com.facebook.react.uimanager.NativeViewHierarchyManager
    public synchronized void updateLayout(int i10, int i11, int i12, int i13, int i14, int i15, YogaDirection yogaDirection) {
        try {
            super.updateLayout(i10, i11, i12, i13, i14, i15, yogaDirection);
            updateLayoutCommon(i10, i11, i12, i13, i14, i15);
        } catch (Throwable th2) {
            th = th2;
            while (true) {
                try {
                    break;
                } catch (Throwable th3) {
                    th = th3;
                }
            }
            throw th;
        }
    }

    public abstract void updateLayoutCommon(int i10, int i11, int i12, int i13, int i14, int i15);
}

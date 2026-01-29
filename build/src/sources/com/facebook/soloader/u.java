package com.facebook.soloader;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u implements nb.b {
    @Override // nb.b
    public boolean a(String str, int i10) {
        int i11;
        if ((i10 & 1) != 0) {
            i11 = 16;
        } else {
            i11 = 0;
        }
        return SoLoader.u(str, i11);
    }
}

package com.otaliastudios.zoom;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static void a(c cVar, float f10) {
            Intrinsics.checkNotNullParameter(cVar, "this");
            cVar.setMaxZoom(f10, 0);
        }

        public static void b(c cVar, float f10) {
            Intrinsics.checkNotNullParameter(cVar, "this");
            cVar.setMinZoom(f10, 0);
        }

        public static void c(c cVar, int i10) {
            Intrinsics.checkNotNullParameter(cVar, "this");
            cVar.setTransformation(i10, 0);
        }
    }

    void setMaxZoom(float f10, int i10);

    void setMinZoom(float f10, int i10);

    void setTransformation(int i10, int i11);
}

package com.otaliastudios.zoom;

import kotlin.jvm.internal.Intrinsics;
import lr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface OverPanRangeProvider {

    /* renamed from: a  reason: collision with root package name */
    public static final b f16869a = b.f16872a;

    /* renamed from: b  reason: collision with root package name */
    public static final OverPanRangeProvider f16870b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements OverPanRangeProvider {

        /* renamed from: c  reason: collision with root package name */
        private final float f16871c = 0.1f;

        a() {
        }

        @Override // com.otaliastudios.zoom.OverPanRangeProvider
        public float a(ZoomEngine engine, boolean z10) {
            float u10;
            float f10;
            Intrinsics.checkNotNullParameter(engine, "engine");
            if (z10) {
                u10 = engine.v();
                f10 = this.f16871c;
            } else if (!z10) {
                u10 = engine.u();
                f10 = this.f16871c;
            } else {
                throw new p();
            }
            return u10 * f10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ b f16872a = new b();

        private b() {
        }
    }

    float a(ZoomEngine zoomEngine, boolean z10);
}

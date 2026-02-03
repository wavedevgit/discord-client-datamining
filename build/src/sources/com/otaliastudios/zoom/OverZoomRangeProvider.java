package com.otaliastudios.zoom;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface OverZoomRangeProvider {

    /* renamed from: a  reason: collision with root package name */
    public static final b f17905a = b.f17908a;

    /* renamed from: b  reason: collision with root package name */
    public static final OverZoomRangeProvider f17906b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements OverZoomRangeProvider {

        /* renamed from: c  reason: collision with root package name */
        private final float f17907c = 0.1f;

        a() {
        }

        @Override // com.otaliastudios.zoom.OverZoomRangeProvider
        public float a(ZoomEngine engine, boolean z10) {
            Intrinsics.checkNotNullParameter(engine, "engine");
            return this.f17907c * (engine.z() - engine.B());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ b f17908a = new b();

        private b() {
        }
    }

    float a(ZoomEngine zoomEngine, boolean z10);
}

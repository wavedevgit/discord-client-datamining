package com.otaliastudios.zoom;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface OverZoomRangeProvider {

    /* renamed from: a  reason: collision with root package name */
    public static final b f18272a = b.f18275a;

    /* renamed from: b  reason: collision with root package name */
    public static final OverZoomRangeProvider f18273b = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a implements OverZoomRangeProvider {

        /* renamed from: c  reason: collision with root package name */
        private final float f18274c = 0.1f;

        a() {
        }

        @Override // com.otaliastudios.zoom.OverZoomRangeProvider
        public float a(ZoomEngine engine, boolean z10) {
            Intrinsics.checkNotNullParameter(engine, "engine");
            return this.f18274c * (engine.z() - engine.B());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ b f18275a = new b();

        private b() {
        }
    }

    float a(ZoomEngine zoomEngine, boolean z10);
}

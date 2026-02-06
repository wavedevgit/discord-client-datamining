package wn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f53968a;

    /* renamed from: b  reason: collision with root package name */
    private final zn.a f53969b;

    /* renamed from: c  reason: collision with root package name */
    private final wp.c f53970c;

    /* renamed from: d  reason: collision with root package name */
    private final m f53971d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f53972e;

    /* renamed from: f  reason: collision with root package name */
    private final b f53973f;

    /* renamed from: g  reason: collision with root package name */
    private final ao.a f53974g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f53975h;

    /* renamed from: i  reason: collision with root package name */
    private int f53976i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, ao.a aVar, tq.a aVar2, boolean z10);
    }

    public g(Context context, zn.a cameraStatsManager, wp.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, ao.a videoCaptureMethod, tq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f53968a = context;
        this.f53969b = cameraStatsManager;
        this.f53970c = sdkFilesManager;
        this.f53971d = cameraChoices;
        this.f53972e = previewView;
        this.f53973f = analyzer;
        this.f53974g = videoCaptureMethod;
        this.f53975h = z10;
    }

    public final e a() {
        return new e(this.f53968a, (l) this.f53971d.a().get(this.f53976i), this.f53972e, this.f53973f, this.f53974g, null, this.f53975h, this.f53969b, this.f53970c);
    }

    public final boolean b() {
        if (this.f53976i + 1 >= this.f53971d.a().size()) {
            return false;
        }
        this.f53976i++;
        return true;
    }
}

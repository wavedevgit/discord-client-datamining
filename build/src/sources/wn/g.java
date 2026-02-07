package wn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f54016a;

    /* renamed from: b  reason: collision with root package name */
    private final zn.a f54017b;

    /* renamed from: c  reason: collision with root package name */
    private final wp.c f54018c;

    /* renamed from: d  reason: collision with root package name */
    private final m f54019d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f54020e;

    /* renamed from: f  reason: collision with root package name */
    private final b f54021f;

    /* renamed from: g  reason: collision with root package name */
    private final ao.a f54022g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f54023h;

    /* renamed from: i  reason: collision with root package name */
    private int f54024i;

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
        this.f54016a = context;
        this.f54017b = cameraStatsManager;
        this.f54018c = sdkFilesManager;
        this.f54019d = cameraChoices;
        this.f54020e = previewView;
        this.f54021f = analyzer;
        this.f54022g = videoCaptureMethod;
        this.f54023h = z10;
    }

    public final e a() {
        return new e(this.f54016a, (l) this.f54019d.a().get(this.f54024i), this.f54020e, this.f54021f, this.f54022g, null, this.f54023h, this.f54017b, this.f54018c);
    }

    public final boolean b() {
        if (this.f54024i + 1 >= this.f54019d.a().size()) {
            return false;
        }
        this.f54024i++;
        return true;
    }
}

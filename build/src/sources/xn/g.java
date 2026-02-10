package xn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f55179a;

    /* renamed from: b  reason: collision with root package name */
    private final ao.a f55180b;

    /* renamed from: c  reason: collision with root package name */
    private final xp.c f55181c;

    /* renamed from: d  reason: collision with root package name */
    private final m f55182d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f55183e;

    /* renamed from: f  reason: collision with root package name */
    private final b f55184f;

    /* renamed from: g  reason: collision with root package name */
    private final bo.a f55185g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f55186h;

    /* renamed from: i  reason: collision with root package name */
    private int f55187i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, bo.a aVar, uq.a aVar2, boolean z10);
    }

    public g(Context context, ao.a cameraStatsManager, xp.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, bo.a videoCaptureMethod, uq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f55179a = context;
        this.f55180b = cameraStatsManager;
        this.f55181c = sdkFilesManager;
        this.f55182d = cameraChoices;
        this.f55183e = previewView;
        this.f55184f = analyzer;
        this.f55185g = videoCaptureMethod;
        this.f55186h = z10;
    }

    public final e a() {
        return new e(this.f55179a, (l) this.f55182d.a().get(this.f55187i), this.f55183e, this.f55184f, this.f55185g, null, this.f55186h, this.f55180b, this.f55181c);
    }

    public final boolean b() {
        if (this.f55187i + 1 >= this.f55182d.a().size()) {
            return false;
        }
        this.f55187i++;
        return true;
    }
}

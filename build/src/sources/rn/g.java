package rn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f48966a;

    /* renamed from: b  reason: collision with root package name */
    private final un.a f48967b;

    /* renamed from: c  reason: collision with root package name */
    private final rp.c f48968c;

    /* renamed from: d  reason: collision with root package name */
    private final m f48969d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f48970e;

    /* renamed from: f  reason: collision with root package name */
    private final b f48971f;

    /* renamed from: g  reason: collision with root package name */
    private final vn.a f48972g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f48973h;

    /* renamed from: i  reason: collision with root package name */
    private int f48974i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, vn.a aVar, oq.a aVar2, boolean z10);
    }

    public g(Context context, un.a cameraStatsManager, rp.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, vn.a videoCaptureMethod, oq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f48966a = context;
        this.f48967b = cameraStatsManager;
        this.f48968c = sdkFilesManager;
        this.f48969d = cameraChoices;
        this.f48970e = previewView;
        this.f48971f = analyzer;
        this.f48972g = videoCaptureMethod;
        this.f48973h = z10;
    }

    public final e a() {
        return new e(this.f48966a, (l) this.f48969d.a().get(this.f48974i), this.f48970e, this.f48971f, this.f48972g, null, this.f48973h, this.f48967b, this.f48968c);
    }

    public final boolean b() {
        if (this.f48974i + 1 >= this.f48969d.a().size()) {
            return false;
        }
        this.f48974i++;
        return true;
    }
}

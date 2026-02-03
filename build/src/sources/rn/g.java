package rn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f48969a;

    /* renamed from: b  reason: collision with root package name */
    private final un.a f48970b;

    /* renamed from: c  reason: collision with root package name */
    private final rp.c f48971c;

    /* renamed from: d  reason: collision with root package name */
    private final m f48972d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f48973e;

    /* renamed from: f  reason: collision with root package name */
    private final b f48974f;

    /* renamed from: g  reason: collision with root package name */
    private final vn.a f48975g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f48976h;

    /* renamed from: i  reason: collision with root package name */
    private int f48977i;

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
        this.f48969a = context;
        this.f48970b = cameraStatsManager;
        this.f48971c = sdkFilesManager;
        this.f48972d = cameraChoices;
        this.f48973e = previewView;
        this.f48974f = analyzer;
        this.f48975g = videoCaptureMethod;
        this.f48976h = z10;
    }

    public final e a() {
        return new e(this.f48969a, (l) this.f48972d.a().get(this.f48977i), this.f48973e, this.f48974f, this.f48975g, null, this.f48976h, this.f48970b, this.f48971c);
    }

    public final boolean b() {
        if (this.f48977i + 1 >= this.f48972d.a().size()) {
            return false;
        }
        this.f48977i++;
        return true;
    }
}

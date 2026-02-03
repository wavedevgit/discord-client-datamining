package pn;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f46333a;

    /* renamed from: b  reason: collision with root package name */
    private final sn.a f46334b;

    /* renamed from: c  reason: collision with root package name */
    private final pp.c f46335c;

    /* renamed from: d  reason: collision with root package name */
    private final m f46336d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f46337e;

    /* renamed from: f  reason: collision with root package name */
    private final b f46338f;

    /* renamed from: g  reason: collision with root package name */
    private final tn.a f46339g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f46340h;

    /* renamed from: i  reason: collision with root package name */
    private int f46341i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, tn.a aVar, mq.a aVar2, boolean z10);
    }

    public g(Context context, sn.a cameraStatsManager, pp.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, tn.a videoCaptureMethod, mq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f46333a = context;
        this.f46334b = cameraStatsManager;
        this.f46335c = sdkFilesManager;
        this.f46336d = cameraChoices;
        this.f46337e = previewView;
        this.f46338f = analyzer;
        this.f46339g = videoCaptureMethod;
        this.f46340h = z10;
    }

    public final e a() {
        return new e(this.f46333a, (l) this.f46336d.a().get(this.f46341i), this.f46337e, this.f46338f, this.f46339g, null, this.f46340h, this.f46334b, this.f46335c);
    }

    public final boolean b() {
        if (this.f46341i + 1 >= this.f46336d.a().size()) {
            return false;
        }
        this.f46341i++;
        return true;
    }
}

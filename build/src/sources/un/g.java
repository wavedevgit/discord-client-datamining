package un;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f51568a;

    /* renamed from: b  reason: collision with root package name */
    private final xn.a f51569b;

    /* renamed from: c  reason: collision with root package name */
    private final up.c f51570c;

    /* renamed from: d  reason: collision with root package name */
    private final m f51571d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f51572e;

    /* renamed from: f  reason: collision with root package name */
    private final b f51573f;

    /* renamed from: g  reason: collision with root package name */
    private final yn.a f51574g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f51575h;

    /* renamed from: i  reason: collision with root package name */
    private int f51576i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, yn.a aVar, rq.a aVar2, boolean z10);
    }

    public g(Context context, xn.a cameraStatsManager, up.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, yn.a videoCaptureMethod, rq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f51568a = context;
        this.f51569b = cameraStatsManager;
        this.f51570c = sdkFilesManager;
        this.f51571d = cameraChoices;
        this.f51572e = previewView;
        this.f51573f = analyzer;
        this.f51574g = videoCaptureMethod;
        this.f51575h = z10;
    }

    public final e a() {
        return new e(this.f51568a, (l) this.f51571d.a().get(this.f51576i), this.f51572e, this.f51573f, this.f51574g, null, this.f51575h, this.f51569b, this.f51570c);
    }

    public final boolean b() {
        if (this.f51576i + 1 >= this.f51571d.a().size()) {
            return false;
        }
        this.f51576i++;
        return true;
    }
}

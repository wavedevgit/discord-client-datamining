package on;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44543a;

    /* renamed from: b  reason: collision with root package name */
    private final rn.a f44544b;

    /* renamed from: c  reason: collision with root package name */
    private final op.c f44545c;

    /* renamed from: d  reason: collision with root package name */
    private final m f44546d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f44547e;

    /* renamed from: f  reason: collision with root package name */
    private final b f44548f;

    /* renamed from: g  reason: collision with root package name */
    private final sn.a f44549g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44550h;

    /* renamed from: i  reason: collision with root package name */
    private int f44551i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, sn.a aVar, lq.a aVar2, boolean z10);
    }

    public g(Context context, rn.a cameraStatsManager, op.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, sn.a videoCaptureMethod, lq.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f44543a = context;
        this.f44544b = cameraStatsManager;
        this.f44545c = sdkFilesManager;
        this.f44546d = cameraChoices;
        this.f44547e = previewView;
        this.f44548f = analyzer;
        this.f44549g = videoCaptureMethod;
        this.f44550h = z10;
    }

    public final e a() {
        return new e(this.f44543a, (l) this.f44546d.a().get(this.f44551i), this.f44547e, this.f44548f, this.f44549g, null, this.f44550h, this.f44544b, this.f44545c);
    }

    public final boolean b() {
        if (this.f44551i + 1 >= this.f44546d.a().size()) {
            return false;
        }
        this.f44551i++;
        return true;
    }
}

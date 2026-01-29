package on;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f44527a;

    /* renamed from: b  reason: collision with root package name */
    private final rn.a f44528b;

    /* renamed from: c  reason: collision with root package name */
    private final op.c f44529c;

    /* renamed from: d  reason: collision with root package name */
    private final m f44530d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f44531e;

    /* renamed from: f  reason: collision with root package name */
    private final b f44532f;

    /* renamed from: g  reason: collision with root package name */
    private final sn.a f44533g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44534h;

    /* renamed from: i  reason: collision with root package name */
    private int f44535i;

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
        this.f44527a = context;
        this.f44528b = cameraStatsManager;
        this.f44529c = sdkFilesManager;
        this.f44530d = cameraChoices;
        this.f44531e = previewView;
        this.f44532f = analyzer;
        this.f44533g = videoCaptureMethod;
        this.f44534h = z10;
    }

    public final e a() {
        return new e(this.f44527a, (l) this.f44530d.a().get(this.f44535i), this.f44531e, this.f44532f, this.f44533g, null, this.f44534h, this.f44528b, this.f44529c);
    }

    public final boolean b() {
        if (this.f44535i + 1 >= this.f44530d.a().size()) {
            return false;
        }
        this.f44535i++;
        return true;
    }
}

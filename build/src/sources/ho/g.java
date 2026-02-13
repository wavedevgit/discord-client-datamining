package ho;

import android.content.Context;
import com.withpersona.sdk2.camera.camera2.Camera2PreviewView;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Context f28136a;

    /* renamed from: b  reason: collision with root package name */
    private final ko.a f28137b;

    /* renamed from: c  reason: collision with root package name */
    private final gq.c f28138c;

    /* renamed from: d  reason: collision with root package name */
    private final m f28139d;

    /* renamed from: e  reason: collision with root package name */
    private final Camera2PreviewView f28140e;

    /* renamed from: f  reason: collision with root package name */
    private final b f28141f;

    /* renamed from: g  reason: collision with root package name */
    private final lo.a f28142g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f28143h;

    /* renamed from: i  reason: collision with root package name */
    private int f28144i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        g a(m mVar, Camera2PreviewView camera2PreviewView, b bVar, lo.a aVar, dr.a aVar2, boolean z10);
    }

    public g(Context context, ko.a cameraStatsManager, gq.c sdkFilesManager, m cameraChoices, Camera2PreviewView previewView, b analyzer, lo.a videoCaptureMethod, dr.a aVar, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(cameraStatsManager, "cameraStatsManager");
        Intrinsics.checkNotNullParameter(sdkFilesManager, "sdkFilesManager");
        Intrinsics.checkNotNullParameter(cameraChoices, "cameraChoices");
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        Intrinsics.checkNotNullParameter(analyzer, "analyzer");
        Intrinsics.checkNotNullParameter(videoCaptureMethod, "videoCaptureMethod");
        this.f28136a = context;
        this.f28137b = cameraStatsManager;
        this.f28138c = sdkFilesManager;
        this.f28139d = cameraChoices;
        this.f28140e = previewView;
        this.f28141f = analyzer;
        this.f28142g = videoCaptureMethod;
        this.f28143h = z10;
    }

    public final e a() {
        return new e(this.f28136a, (l) this.f28139d.a().get(this.f28144i), this.f28140e, this.f28141f, this.f28142g, null, this.f28143h, this.f28137b, this.f28138c);
    }

    public final boolean b() {
        if (this.f28144i + 1 >= this.f28139d.a().size()) {
            return false;
        }
        this.f28144i++;
        return true;
    }
}

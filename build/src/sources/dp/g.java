package dp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f20934a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f20935b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f20936c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f20934a = pictureLaunchResultLauncher;
        this.f20935b = openDocumentsResultLauncher;
        this.f20936c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f20935b;
    }

    public final ActivityResultLauncher b() {
        return this.f20936c;
    }

    public final ActivityResultLauncher c() {
        return this.f20934a;
    }
}

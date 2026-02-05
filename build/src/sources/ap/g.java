package ap;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f5939a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f5940b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f5941c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f5939a = pictureLaunchResultLauncher;
        this.f5940b = openDocumentsResultLauncher;
        this.f5941c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f5940b;
    }

    public final ActivityResultLauncher b() {
        return this.f5941c;
    }

    public final ActivityResultLauncher c() {
        return this.f5939a;
    }
}

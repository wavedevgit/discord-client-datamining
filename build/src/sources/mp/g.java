package mp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f36576a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f36577b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f36578c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f36576a = pictureLaunchResultLauncher;
        this.f36577b = openDocumentsResultLauncher;
        this.f36578c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f36577b;
    }

    public final ActivityResultLauncher b() {
        return this.f36578c;
    }

    public final ActivityResultLauncher c() {
        return this.f36576a;
    }
}

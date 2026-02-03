package vo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f51483a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f51484b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f51485c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f51483a = pictureLaunchResultLauncher;
        this.f51484b = openDocumentsResultLauncher;
        this.f51485c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f51484b;
    }

    public final ActivityResultLauncher b() {
        return this.f51485c;
    }

    public final ActivityResultLauncher c() {
        return this.f51483a;
    }
}

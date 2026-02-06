package cp;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f19990a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f19991b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f19992c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f19990a = pictureLaunchResultLauncher;
        this.f19991b = openDocumentsResultLauncher;
        this.f19992c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f19991b;
    }

    public final ActivityResultLauncher b() {
        return this.f19992c;
    }

    public final ActivityResultLauncher c() {
        return this.f19990a;
    }
}

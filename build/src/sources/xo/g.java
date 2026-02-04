package xo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f53519a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f53520b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f53521c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f53519a = pictureLaunchResultLauncher;
        this.f53520b = openDocumentsResultLauncher;
        this.f53521c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f53520b;
    }

    public final ActivityResultLauncher b() {
        return this.f53521c;
    }

    public final ActivityResultLauncher c() {
        return this.f53519a;
    }
}

package uo;

import androidx.activity.result.ActivityResultLauncher;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final ActivityResultLauncher f50511a;

    /* renamed from: b  reason: collision with root package name */
    private final ActivityResultLauncher f50512b;

    /* renamed from: c  reason: collision with root package name */
    private final ActivityResultLauncher f50513c;

    public g(ActivityResultLauncher pictureLaunchResultLauncher, ActivityResultLauncher openDocumentsResultLauncher, ActivityResultLauncher selectFromPhotoLibraryLauncher) {
        Intrinsics.checkNotNullParameter(pictureLaunchResultLauncher, "pictureLaunchResultLauncher");
        Intrinsics.checkNotNullParameter(openDocumentsResultLauncher, "openDocumentsResultLauncher");
        Intrinsics.checkNotNullParameter(selectFromPhotoLibraryLauncher, "selectFromPhotoLibraryLauncher");
        this.f50511a = pictureLaunchResultLauncher;
        this.f50512b = openDocumentsResultLauncher;
        this.f50513c = selectFromPhotoLibraryLauncher;
    }

    public final ActivityResultLauncher a() {
        return this.f50512b;
    }

    public final ActivityResultLauncher b() {
        return this.f50513c;
    }

    public final ActivityResultLauncher c() {
        return this.f50511a;
    }
}

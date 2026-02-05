package up;

import android.content.Context;
import java.io.File;
import java.util.List;
import java.util.UUID;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import zr.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f51652a;

    /* renamed from: b  reason: collision with root package name */
    private final File f51653b;

    public c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        File file = new File(context.getFilesDir(), ".com.withpersona.sdk2.inquiry");
        this.f51652a = file;
        this.f51653b = new File(file, "sess");
    }

    public final void a() {
        j.r(this.f51653b);
    }

    public final List b() {
        return CollectionsKt.e(this.f51653b);
    }

    public final File c(String extension) {
        Intrinsics.checkNotNullParameter(extension, "extension");
        this.f51653b.mkdirs();
        File file = this.f51653b;
        UUID randomUUID = UUID.randomUUID();
        return new File(file, randomUUID + "." + extension);
    }

    public final File d(String fileName) {
        Intrinsics.checkNotNullParameter(fileName, "fileName");
        this.f51653b.mkdirs();
        return new File(this.f51653b, fileName);
    }
}

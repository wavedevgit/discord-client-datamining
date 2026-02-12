package d6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f21478a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21479b;

    /* renamed from: c  reason: collision with root package name */
    private final int f21480c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f21481d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f21482e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f21481d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f21482e != null) {
            return new ByteArrayInputStream(this.f21482e);
        }
        return null;
    }

    public final int b() {
        return this.f21480c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f21479b);
    }

    public final int d() {
        return this.f21478a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f21478a = i10;
        this.f21479b = list;
        this.f21480c = i11;
        this.f21481d = inputStream;
        this.f21482e = null;
    }
}

package c6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f7251a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7252b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7253c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f7254d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f7255e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f7254d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f7255e != null) {
            return new ByteArrayInputStream(this.f7255e);
        }
        return null;
    }

    public final int b() {
        return this.f7253c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f7252b);
    }

    public final int d() {
        return this.f7251a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f7251a = i10;
        this.f7252b = list;
        this.f7253c = i11;
        this.f7254d = inputStream;
        this.f7255e = null;
    }
}

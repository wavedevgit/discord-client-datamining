package c6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f6988a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6989b;

    /* renamed from: c  reason: collision with root package name */
    private final int f6990c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f6991d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f6992e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f6991d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f6992e != null) {
            return new ByteArrayInputStream(this.f6992e);
        }
        return null;
    }

    public final int b() {
        return this.f6990c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f6989b);
    }

    public final int d() {
        return this.f6988a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f6988a = i10;
        this.f6989b = list;
        this.f6990c = i11;
        this.f6991d = inputStream;
        this.f6992e = null;
    }
}

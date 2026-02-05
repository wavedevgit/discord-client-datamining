package c6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f7406a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7407b;

    /* renamed from: c  reason: collision with root package name */
    private final int f7408c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f7409d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f7410e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f7409d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f7410e != null) {
            return new ByteArrayInputStream(this.f7410e);
        }
        return null;
    }

    public final int b() {
        return this.f7408c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f7407b);
    }

    public final int d() {
        return this.f7406a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f7406a = i10;
        this.f7407b = list;
        this.f7408c = i11;
        this.f7409d = inputStream;
        this.f7410e = null;
    }
}

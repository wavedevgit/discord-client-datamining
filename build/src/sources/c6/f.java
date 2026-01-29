package c6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f8145a;

    /* renamed from: b  reason: collision with root package name */
    private final List f8146b;

    /* renamed from: c  reason: collision with root package name */
    private final int f8147c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f8148d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f8149e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f8148d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f8149e != null) {
            return new ByteArrayInputStream(this.f8149e);
        }
        return null;
    }

    public final int b() {
        return this.f8147c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f8146b);
    }

    public final int d() {
        return this.f8145a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f8145a = i10;
        this.f8146b = list;
        this.f8147c = i11;
        this.f8148d = inputStream;
        this.f8149e = null;
    }
}

package d6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f20530a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20531b;

    /* renamed from: c  reason: collision with root package name */
    private final int f20532c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f20533d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f20534e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f20533d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f20534e != null) {
            return new ByteArrayInputStream(this.f20534e);
        }
        return null;
    }

    public final int b() {
        return this.f20532c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f20531b);
    }

    public final int d() {
        return this.f20530a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f20530a = i10;
        this.f20531b = list;
        this.f20532c = i11;
        this.f20533d = inputStream;
        this.f20534e = null;
    }
}

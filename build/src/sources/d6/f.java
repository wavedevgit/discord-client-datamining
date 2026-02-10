package d6;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final int f21477a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21478b;

    /* renamed from: c  reason: collision with root package name */
    private final int f21479c;

    /* renamed from: d  reason: collision with root package name */
    private final InputStream f21480d;

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f21481e;

    public f(int i10, List list) {
        this(i10, list, -1, null);
    }

    public final InputStream a() {
        InputStream inputStream = this.f21480d;
        if (inputStream != null) {
            return inputStream;
        }
        if (this.f21481e != null) {
            return new ByteArrayInputStream(this.f21481e);
        }
        return null;
    }

    public final int b() {
        return this.f21479c;
    }

    public final List c() {
        return Collections.unmodifiableList(this.f21478b);
    }

    public final int d() {
        return this.f21477a;
    }

    public f(int i10, List list, int i11, InputStream inputStream) {
        this.f21477a = i10;
        this.f21478b = list;
        this.f21479c = i11;
        this.f21480d = inputStream;
        this.f21481e = null;
    }
}

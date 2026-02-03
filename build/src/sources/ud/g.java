package ud;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f50255a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50256b;

    /* renamed from: c  reason: collision with root package name */
    public final List f50257c;

    /* renamed from: d  reason: collision with root package name */
    public final List f50258d;

    /* renamed from: e  reason: collision with root package name */
    public final e f50259e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f50257c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f50257c.get(i11)).f50211b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f50255a = str;
        this.f50256b = j10;
        this.f50257c = Collections.unmodifiableList(list);
        this.f50258d = Collections.unmodifiableList(list2);
        this.f50259e = eVar;
    }
}

package vd;

import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    public final String f52071a;

    /* renamed from: b  reason: collision with root package name */
    public final long f52072b;

    /* renamed from: c  reason: collision with root package name */
    public final List f52073c;

    /* renamed from: d  reason: collision with root package name */
    public final List f52074d;

    /* renamed from: e  reason: collision with root package name */
    public final e f52075e;

    public g(String str, long j10, List list, List list2) {
        this(str, j10, list, list2, null);
    }

    public int a(int i10) {
        int size = this.f52073c.size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((a) this.f52073c.get(i11)).f52027b == i10) {
                return i11;
            }
        }
        return -1;
    }

    public g(String str, long j10, List list, List list2, e eVar) {
        this.f52071a = str;
        this.f52072b = j10;
        this.f52073c = Collections.unmodifiableList(list);
        this.f52074d = Collections.unmodifiableList(list2);
        this.f52075e = eVar;
    }
}

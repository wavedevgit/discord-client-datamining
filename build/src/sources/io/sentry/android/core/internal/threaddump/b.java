package io.sentry.android.core.internal.threaddump;

import java.io.BufferedReader;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f27984a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27985b = 0;

    /* renamed from: c  reason: collision with root package name */
    private final int f27986c;

    /* renamed from: d  reason: collision with root package name */
    public int f27987d;

    public b(ArrayList arrayList) {
        this.f27984a = arrayList;
        this.f27986c = arrayList.size();
    }

    public static b c(BufferedReader bufferedReader) {
        ArrayList arrayList = new ArrayList();
        int i10 = 0;
        while (true) {
            String readLine = bufferedReader.readLine();
            if (readLine != null) {
                i10++;
                arrayList.add(new a(i10, readLine));
            } else {
                return new b(arrayList);
            }
        }
    }

    public boolean a() {
        if (this.f27987d < this.f27986c) {
            return true;
        }
        return false;
    }

    public a b() {
        int i10 = this.f27987d;
        if (i10 >= this.f27985b && i10 < this.f27986c) {
            ArrayList arrayList = this.f27984a;
            this.f27987d = i10 + 1;
            return (a) arrayList.get(i10);
        }
        return null;
    }

    public void d() {
        this.f27987d--;
    }
}

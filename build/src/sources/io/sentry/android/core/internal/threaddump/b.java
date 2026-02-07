package io.sentry.android.core.internal.threaddump;

import java.io.BufferedReader;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final ArrayList f27176a;

    /* renamed from: b  reason: collision with root package name */
    private final int f27177b = 0;

    /* renamed from: c  reason: collision with root package name */
    private final int f27178c;

    /* renamed from: d  reason: collision with root package name */
    public int f27179d;

    public b(ArrayList arrayList) {
        this.f27176a = arrayList;
        this.f27178c = arrayList.size();
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
        if (this.f27179d < this.f27178c) {
            return true;
        }
        return false;
    }

    public a b() {
        int i10 = this.f27179d;
        if (i10 >= this.f27177b && i10 < this.f27178c) {
            ArrayList arrayList = this.f27176a;
            this.f27179d = i10 + 1;
            return (a) arrayList.get(i10);
        }
        return null;
    }

    public void d() {
        this.f27179d--;
    }
}

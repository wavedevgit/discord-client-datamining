package com.henninghall.date_picker;

import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final n f16582a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16583a;

        static {
            int[] iArr = new int[fl.b.values().length];
            f16583a = iArr;
            try {
                iArr[fl.b.datetime.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16583a[fl.b.time.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16583a[fl.b.date.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar) {
        this.f16582a = nVar;
    }

    private ArrayList c() {
        String replaceAll = h.c(this.f16582a.u()).replaceAll("\\('(.+?)'\\)", "\\${$1}").replaceAll("'.+?'", "").replaceAll("\\$\\{(.+?)\\}", "('$1')");
        ArrayList arrayList = new ArrayList(Arrays.asList(fl.c.values()));
        ArrayList arrayList2 = new ArrayList();
        fl.c cVar = fl.c.DAY;
        arrayList.remove(cVar);
        arrayList2.add(cVar);
        for (char c10 : replaceAll.toCharArray()) {
            try {
                fl.c h10 = o.h(c10);
                if (arrayList.contains(h10)) {
                    arrayList.remove(h10);
                    arrayList2.add(h10);
                }
            } catch (Exception unused) {
            }
        }
        fl.c cVar2 = fl.c.AM_PM;
        if (arrayList.contains(cVar2)) {
            arrayList.remove(cVar2);
            arrayList2.add(cVar2);
        }
        if (!arrayList.isEmpty()) {
            Log.e(NativeRNDatePickerSpec.NAME, arrayList.size() + " wheel types cannot be ordered. Wheel type 0: " + arrayList.get(0));
        }
        return arrayList2;
    }

    public String a() {
        Calendar t10 = this.f16582a.t();
        String s10 = this.f16582a.s();
        if (t10 != null) {
            return o.b(t10);
        }
        return s10;
    }

    public ArrayList b() {
        ArrayList c10 = c();
        ArrayList e10 = e();
        ArrayList arrayList = new ArrayList();
        Iterator it = c10.iterator();
        while (it.hasNext()) {
            fl.c cVar = (fl.c) it.next();
            if (e10.contains(cVar)) {
                arrayList.add(cVar);
            }
        }
        return arrayList;
    }

    public int d() {
        return l.f16670a;
    }

    public ArrayList e() {
        ArrayList arrayList = new ArrayList();
        fl.b z10 = this.f16582a.z();
        int i10 = a.f16583a[z10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    arrayList.add(fl.c.YEAR);
                    arrayList.add(fl.c.MONTH);
                    arrayList.add(fl.c.DATE);
                }
            } else {
                arrayList.add(fl.c.HOUR);
                arrayList.add(fl.c.MINUTE);
            }
        } else {
            arrayList.add(fl.c.DAY);
            arrayList.add(fl.c.HOUR);
            arrayList.add(fl.c.MINUTE);
        }
        if ((z10 == fl.b.time || z10 == fl.b.datetime) && this.f16582a.f16697o.g()) {
            arrayList.add(fl.c.AM_PM);
        }
        return arrayList;
    }

    public boolean f() {
        if (this.f16582a.z() == fl.b.time && !g()) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f16582a.r() == fl.a.locale) {
            return h.h(this.f16582a.u());
        }
        return o.c();
    }
}

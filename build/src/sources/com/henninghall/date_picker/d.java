package com.henninghall.date_picker;

import android.util.Log;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final n f16722a;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f16723a;

        static {
            int[] iArr = new int[gl.b.values().length];
            f16723a = iArr;
            try {
                iArr[gl.b.datetime.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f16723a[gl.b.time.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f16723a[gl.b.date.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public d(n nVar) {
        this.f16722a = nVar;
    }

    private ArrayList c() {
        String replaceAll = h.c(this.f16722a.u()).replaceAll("\\('(.+?)'\\)", "\\${$1}").replaceAll("'.+?'", "").replaceAll("\\$\\{(.+?)\\}", "('$1')");
        ArrayList arrayList = new ArrayList(Arrays.asList(gl.c.values()));
        ArrayList arrayList2 = new ArrayList();
        gl.c cVar = gl.c.DAY;
        arrayList.remove(cVar);
        arrayList2.add(cVar);
        for (char c10 : replaceAll.toCharArray()) {
            try {
                gl.c h10 = o.h(c10);
                if (arrayList.contains(h10)) {
                    arrayList.remove(h10);
                    arrayList2.add(h10);
                }
            } catch (Exception unused) {
            }
        }
        gl.c cVar2 = gl.c.AM_PM;
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
        Calendar t10 = this.f16722a.t();
        String s10 = this.f16722a.s();
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
            gl.c cVar = (gl.c) it.next();
            if (e10.contains(cVar)) {
                arrayList.add(cVar);
            }
        }
        return arrayList;
    }

    public int d() {
        return l.f16810a;
    }

    public ArrayList e() {
        ArrayList arrayList = new ArrayList();
        gl.b z10 = this.f16722a.z();
        int i10 = a.f16723a[z10.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    arrayList.add(gl.c.YEAR);
                    arrayList.add(gl.c.MONTH);
                    arrayList.add(gl.c.DATE);
                }
            } else {
                arrayList.add(gl.c.HOUR);
                arrayList.add(gl.c.MINUTE);
            }
        } else {
            arrayList.add(gl.c.DAY);
            arrayList.add(gl.c.HOUR);
            arrayList.add(gl.c.MINUTE);
        }
        if ((z10 == gl.b.time || z10 == gl.b.datetime) && this.f16722a.f16837o.g()) {
            arrayList.add(gl.c.AM_PM);
        }
        return arrayList;
    }

    public boolean f() {
        if (this.f16722a.z() == gl.b.time && !g()) {
            return true;
        }
        return false;
    }

    public boolean g() {
        if (this.f16722a.r() == gl.a.locale) {
            return h.h(this.f16722a.u());
        }
        return o.c();
    }
}

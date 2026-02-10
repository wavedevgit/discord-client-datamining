package kl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends g {

    /* renamed from: f  reason: collision with root package name */
    private final com.henninghall.date_picker.g f30942f;

    public d(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f30942f = new com.henninghall.date_picker.g(this.f30943a);
    }

    @Override // kl.g
    public String e() {
        if (this.f30943a.f16837o.g()) {
            return "h";
        }
        return "HH";
    }

    @Override // kl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // kl.g
    public ArrayList n() {
        int i10;
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        if (this.f30943a.f16837o.g()) {
            i10 = 12;
        } else {
            i10 = 24;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            arrayList.add(this.f30947e.format(calendar.getTime()));
            calendar.add(11, 1);
        }
        return arrayList;
    }

    @Override // kl.g
    public String s(String str) {
        return this.f30942f.b(str);
    }

    @Override // kl.g
    public boolean u() {
        if (this.f30943a.z() != gl.b.date) {
            return true;
        }
        return false;
    }

    @Override // kl.g
    public boolean v() {
        return true;
    }
}

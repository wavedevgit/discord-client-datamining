package hl;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends g {

    /* renamed from: f  reason: collision with root package name */
    private final com.henninghall.date_picker.g f25947f;

    public d(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f25947f = new com.henninghall.date_picker.g(this.f25948a);
    }

    @Override // hl.g
    public String e() {
        if (this.f25948a.f16717o.g()) {
            return "h";
        }
        return "HH";
    }

    @Override // hl.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // hl.g
    public ArrayList n() {
        int i10;
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        if (this.f25948a.f16717o.g()) {
            i10 = 12;
        } else {
            i10 = 24;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            arrayList.add(this.f25952e.format(calendar.getTime()));
            calendar.add(11, 1);
        }
        return arrayList;
    }

    @Override // hl.g
    public String s(String str) {
        return this.f25947f.b(str);
    }

    @Override // hl.g
    public boolean u() {
        if (this.f25948a.z() != dl.b.date) {
            return true;
        }
        return false;
    }

    @Override // hl.g
    public boolean v() {
        return true;
    }
}

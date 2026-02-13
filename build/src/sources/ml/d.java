package ml;

import android.graphics.Paint;
import com.henninghall.date_picker.n;
import java.util.ArrayList;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends g {

    /* renamed from: f  reason: collision with root package name */
    private final com.henninghall.date_picker.g f37112f;

    public d(com.henninghall.date_picker.pickers.a aVar, n nVar) {
        super(aVar, nVar);
        this.f37112f = new com.henninghall.date_picker.g(this.f37113a);
    }

    @Override // ml.g
    public String e() {
        if (this.f37113a.f17587o.g()) {
            return "h";
        }
        return "HH";
    }

    @Override // ml.g
    public Paint.Align k() {
        return Paint.Align.RIGHT;
    }

    @Override // ml.g
    public ArrayList n() {
        int i10;
        Calendar calendar = Calendar.getInstance();
        calendar.set(2000, 0, 0, 0, 0, 0);
        ArrayList arrayList = new ArrayList();
        if (this.f37113a.f17587o.g()) {
            i10 = 12;
        } else {
            i10 = 24;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            arrayList.add(this.f37117e.format(calendar.getTime()));
            calendar.add(11, 1);
        }
        return arrayList;
    }

    @Override // ml.g
    public String s(String str) {
        return this.f37112f.b(str);
    }

    @Override // ml.g
    public boolean u() {
        if (this.f37113a.z() != il.b.date) {
            return true;
        }
        return false;
    }

    @Override // ml.g
    public boolean v() {
        return true;
    }
}

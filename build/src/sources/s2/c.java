package s2;

import android.content.Context;
import android.database.Cursor;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c extends a {

    /* renamed from: t  reason: collision with root package name */
    private int f49170t;

    /* renamed from: u  reason: collision with root package name */
    private int f49171u;

    /* renamed from: v  reason: collision with root package name */
    private LayoutInflater f49172v;

    public c(Context context, int i10, Cursor cursor, boolean z10) {
        super(context, cursor, z10);
        this.f49171u = i10;
        this.f49170t = i10;
        this.f49172v = (LayoutInflater) context.getSystemService("layout_inflater");
    }

    @Override // s2.a
    public View f(Context context, Cursor cursor, ViewGroup viewGroup) {
        return this.f49172v.inflate(this.f49171u, viewGroup, false);
    }

    @Override // s2.a
    public View g(Context context, Cursor cursor, ViewGroup viewGroup) {
        return this.f49172v.inflate(this.f49170t, viewGroup, false);
    }
}

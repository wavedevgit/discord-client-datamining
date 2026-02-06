package s2;

import android.content.Context;
import android.database.Cursor;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class c extends a {

    /* renamed from: t  reason: collision with root package name */
    private int f49654t;

    /* renamed from: u  reason: collision with root package name */
    private int f49655u;

    /* renamed from: v  reason: collision with root package name */
    private LayoutInflater f49656v;

    public c(Context context, int i10, Cursor cursor, boolean z10) {
        super(context, cursor, z10);
        this.f49655u = i10;
        this.f49654t = i10;
        this.f49656v = (LayoutInflater) context.getSystemService("layout_inflater");
    }

    @Override // s2.a
    public View f(Context context, Cursor cursor, ViewGroup viewGroup) {
        return this.f49656v.inflate(this.f49655u, viewGroup, false);
    }

    @Override // s2.a
    public View g(Context context, Cursor cursor, ViewGroup viewGroup) {
        return this.f49656v.inflate(this.f49654t, viewGroup, false);
    }
}

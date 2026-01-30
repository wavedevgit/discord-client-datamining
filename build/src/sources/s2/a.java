package s2;

import android.content.Context;
import android.database.ContentObserver;
import android.database.Cursor;
import android.database.DataSetObserver;
import android.os.Handler;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Filter;
import android.widget.Filterable;
import s2.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a extends BaseAdapter implements Filterable, b.a {

    /* renamed from: d  reason: collision with root package name */
    protected boolean f48698d;

    /* renamed from: e  reason: collision with root package name */
    protected boolean f48699e;

    /* renamed from: i  reason: collision with root package name */
    protected Cursor f48700i;

    /* renamed from: o  reason: collision with root package name */
    protected Context f48701o;

    /* renamed from: p  reason: collision with root package name */
    protected int f48702p;

    /* renamed from: q  reason: collision with root package name */
    protected C0624a f48703q;

    /* renamed from: r  reason: collision with root package name */
    protected DataSetObserver f48704r;

    /* renamed from: s  reason: collision with root package name */
    protected s2.b f48705s;

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: s2.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0624a extends ContentObserver {
        C0624a() {
            super(new Handler());
        }

        @Override // android.database.ContentObserver
        public boolean deliverSelfNotifications() {
            return true;
        }

        @Override // android.database.ContentObserver
        public void onChange(boolean z10) {
            a.this.h();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b extends DataSetObserver {
        b() {
        }

        @Override // android.database.DataSetObserver
        public void onChanged() {
            a aVar = a.this;
            aVar.f48698d = true;
            aVar.notifyDataSetChanged();
        }

        @Override // android.database.DataSetObserver
        public void onInvalidated() {
            a aVar = a.this;
            aVar.f48698d = false;
            aVar.notifyDataSetInvalidated();
        }
    }

    public a(Context context, Cursor cursor, boolean z10) {
        int i10;
        if (z10) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        e(context, cursor, i10);
    }

    public void a(Cursor cursor) {
        Cursor i10 = i(cursor);
        if (i10 != null) {
            i10.close();
        }
    }

    @Override // s2.b.a
    public Cursor c() {
        return this.f48700i;
    }

    public abstract CharSequence convertToString(Cursor cursor);

    public abstract void d(View view, Context context, Cursor cursor);

    void e(Context context, Cursor cursor, int i10) {
        int i11;
        boolean z10 = false;
        if ((i10 & 1) == 1) {
            i10 |= 2;
            this.f48699e = true;
        } else {
            this.f48699e = false;
        }
        if (cursor != null) {
            z10 = true;
        }
        this.f48700i = cursor;
        this.f48698d = z10;
        this.f48701o = context;
        if (z10) {
            i11 = cursor.getColumnIndexOrThrow("_id");
        } else {
            i11 = -1;
        }
        this.f48702p = i11;
        if ((i10 & 2) == 2) {
            this.f48703q = new C0624a();
            this.f48704r = new b();
        } else {
            this.f48703q = null;
            this.f48704r = null;
        }
        if (z10) {
            C0624a c0624a = this.f48703q;
            if (c0624a != null) {
                cursor.registerContentObserver(c0624a);
            }
            DataSetObserver dataSetObserver = this.f48704r;
            if (dataSetObserver != null) {
                cursor.registerDataSetObserver(dataSetObserver);
            }
        }
    }

    public abstract View f(Context context, Cursor cursor, ViewGroup viewGroup);

    public abstract View g(Context context, Cursor cursor, ViewGroup viewGroup);

    @Override // android.widget.Adapter
    public int getCount() {
        Cursor cursor;
        if (this.f48698d && (cursor = this.f48700i) != null) {
            return cursor.getCount();
        }
        return 0;
    }

    @Override // android.widget.BaseAdapter, android.widget.SpinnerAdapter
    public View getDropDownView(int i10, View view, ViewGroup viewGroup) {
        if (this.f48698d) {
            this.f48700i.moveToPosition(i10);
            if (view == null) {
                view = f(this.f48701o, this.f48700i, viewGroup);
            }
            d(view, this.f48701o, this.f48700i);
            return view;
        }
        return null;
    }

    @Override // android.widget.Filterable
    public Filter getFilter() {
        if (this.f48705s == null) {
            this.f48705s = new s2.b(this);
        }
        return this.f48705s;
    }

    @Override // android.widget.Adapter
    public Object getItem(int i10) {
        Cursor cursor;
        if (this.f48698d && (cursor = this.f48700i) != null) {
            cursor.moveToPosition(i10);
            return this.f48700i;
        }
        return null;
    }

    @Override // android.widget.Adapter
    public long getItemId(int i10) {
        Cursor cursor;
        if (!this.f48698d || (cursor = this.f48700i) == null || !cursor.moveToPosition(i10)) {
            return 0L;
        }
        return this.f48700i.getLong(this.f48702p);
    }

    @Override // android.widget.Adapter
    public View getView(int i10, View view, ViewGroup viewGroup) {
        if (this.f48698d) {
            if (this.f48700i.moveToPosition(i10)) {
                if (view == null) {
                    view = g(this.f48701o, this.f48700i, viewGroup);
                }
                d(view, this.f48701o, this.f48700i);
                return view;
            }
            throw new IllegalStateException("couldn't move cursor to position " + i10);
        }
        throw new IllegalStateException("this should only be called when the cursor is valid");
    }

    protected void h() {
        Cursor cursor;
        if (this.f48699e && (cursor = this.f48700i) != null && !cursor.isClosed()) {
            this.f48698d = this.f48700i.requery();
        }
    }

    public Cursor i(Cursor cursor) {
        Cursor cursor2 = this.f48700i;
        if (cursor == cursor2) {
            return null;
        }
        if (cursor2 != null) {
            C0624a c0624a = this.f48703q;
            if (c0624a != null) {
                cursor2.unregisterContentObserver(c0624a);
            }
            DataSetObserver dataSetObserver = this.f48704r;
            if (dataSetObserver != null) {
                cursor2.unregisterDataSetObserver(dataSetObserver);
            }
        }
        this.f48700i = cursor;
        if (cursor != null) {
            C0624a c0624a2 = this.f48703q;
            if (c0624a2 != null) {
                cursor.registerContentObserver(c0624a2);
            }
            DataSetObserver dataSetObserver2 = this.f48704r;
            if (dataSetObserver2 != null) {
                cursor.registerDataSetObserver(dataSetObserver2);
            }
            this.f48702p = cursor.getColumnIndexOrThrow("_id");
            this.f48698d = true;
            notifyDataSetChanged();
            return cursor2;
        }
        this.f48702p = -1;
        this.f48698d = false;
        notifyDataSetInvalidated();
        return cursor2;
    }
}

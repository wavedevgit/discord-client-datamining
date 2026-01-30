package s2;

import android.database.Cursor;
import android.widget.Filter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class b extends Filter {

    /* renamed from: a  reason: collision with root package name */
    a f48708a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    interface a {
        void a(Cursor cursor);

        Cursor b(CharSequence charSequence);

        Cursor c();

        CharSequence convertToString(Cursor cursor);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(a aVar) {
        this.f48708a = aVar;
    }

    @Override // android.widget.Filter
    public CharSequence convertResultToString(Object obj) {
        return this.f48708a.convertToString((Cursor) obj);
    }

    @Override // android.widget.Filter
    protected Filter.FilterResults performFiltering(CharSequence charSequence) {
        Cursor b10 = this.f48708a.b(charSequence);
        Filter.FilterResults filterResults = new Filter.FilterResults();
        if (b10 != null) {
            filterResults.count = b10.getCount();
            filterResults.values = b10;
            return filterResults;
        }
        filterResults.count = 0;
        filterResults.values = null;
        return filterResults;
    }

    @Override // android.widget.Filter
    protected void publishResults(CharSequence charSequence, Filter.FilterResults filterResults) {
        Cursor c10 = this.f48708a.c();
        Object obj = filterResults.values;
        if (obj != null && obj != c10) {
            this.f48708a.a((Cursor) obj);
        }
    }
}

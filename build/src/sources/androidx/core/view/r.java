package androidx.core.view;

import android.view.Menu;
import android.view.MenuItem;
import java.util.Iterator;
import kotlin.jvm.internal.markers.KMutableIterator;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class r {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements Sequence {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Menu f3549a;

        a(Menu menu) {
            this.f3549a = menu;
        }

        @Override // kotlin.sequences.Sequence
        public Iterator iterator() {
            return r.b(this.f3549a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b implements Iterator, KMutableIterator {

        /* renamed from: d  reason: collision with root package name */
        private int f3550d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Menu f3551e;

        b(Menu menu) {
            this.f3551e = menu;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public MenuItem next() {
            Menu menu = this.f3551e;
            int i10 = this.f3550d;
            this.f3550d = i10 + 1;
            MenuItem item = menu.getItem(i10);
            if (item != null) {
                return item;
            }
            throw new IndexOutOfBoundsException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (this.f3550d < this.f3551e.size()) {
                return true;
            }
            return false;
        }

        @Override // java.util.Iterator
        public void remove() {
            Menu menu = this.f3551e;
            int i10 = this.f3550d - 1;
            this.f3550d = i10;
            MenuItem item = menu.getItem(i10);
            if (item != null) {
                menu.removeItem(item.getItemId());
                return;
            }
            throw new IndexOutOfBoundsException();
        }
    }

    public static final Sequence a(Menu menu) {
        return new a(menu);
    }

    public static final Iterator b(Menu menu) {
        return new b(menu);
    }
}

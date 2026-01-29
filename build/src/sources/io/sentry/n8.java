package io.sentry;

import java.io.Serializable;
import java.util.Collection;
import java.util.Iterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class n8 implements Collection, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Collection f30238d;

    /* renamed from: e  reason: collision with root package name */
    final io.sentry.util.a f30239e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n8(Collection collection) {
        if (collection != null) {
            this.f30238d = collection;
            this.f30239e = new io.sentry.util.a();
            return;
        }
        throw new NullPointerException("Collection must not be null.");
    }

    @Override // java.util.Collection
    public boolean add(Object obj) {
        a1 a10 = this.f30239e.a();
        try {
            boolean add = b().add(obj);
            if (a10 != null) {
                a10.close();
            }
            return add;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean addAll(Collection collection) {
        a1 a10 = this.f30239e.a();
        try {
            boolean addAll = b().addAll(collection);
            if (a10 != null) {
                a10.close();
            }
            return addAll;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Collection b() {
        return this.f30238d;
    }

    @Override // java.util.Collection
    public void clear() {
        a1 a10 = this.f30239e.a();
        try {
            b().clear();
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean contains(Object obj) {
        a1 a10 = this.f30239e.a();
        try {
            boolean contains = b().contains(obj);
            if (a10 != null) {
                a10.close();
            }
            return contains;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean containsAll(Collection collection) {
        a1 a10 = this.f30239e.a();
        try {
            boolean containsAll = b().containsAll(collection);
            if (a10 != null) {
                a10.close();
            }
            return containsAll;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean isEmpty() {
        a1 a10 = this.f30239e.a();
        try {
            boolean isEmpty = b().isEmpty();
            if (a10 != null) {
                a10.close();
            }
            return isEmpty;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return b().iterator();
    }

    @Override // java.util.Collection
    public boolean remove(Object obj) {
        a1 a10 = this.f30239e.a();
        try {
            boolean remove = b().remove(obj);
            if (a10 != null) {
                a10.close();
            }
            return remove;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean removeAll(Collection collection) {
        a1 a10 = this.f30239e.a();
        try {
            boolean removeAll = b().removeAll(collection);
            if (a10 != null) {
                a10.close();
            }
            return removeAll;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public boolean retainAll(Collection collection) {
        a1 a10 = this.f30239e.a();
        try {
            boolean retainAll = b().retainAll(collection);
            if (a10 != null) {
                a10.close();
            }
            return retainAll;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    @Override // java.util.Collection
    public int size() {
        a1 a10 = this.f30239e.a();
        try {
            int size = b().size();
            if (a10 != null) {
                a10.close();
            }
            return size;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public String toString() {
        a1 a10 = this.f30239e.a();
        try {
            String obj = b().toString();
            if (a10 != null) {
                a10.close();
            }
            return obj;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }
}

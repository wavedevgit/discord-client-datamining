package io.sentry;

import java.util.Queue;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class o8 extends n8 implements Queue {
    private o8(Queue queue) {
        super(queue);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static o8 d(Queue queue) {
        return new o8(queue);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // io.sentry.n8
    /* renamed from: c */
    public Queue b() {
        return (Queue) super.b();
    }

    @Override // java.util.Queue
    public Object element() {
        a1 a10 = this.f28384e.a();
        try {
            Object element = b().element();
            if (a10 != null) {
                a10.close();
            }
            return element;
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
    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        a1 a10 = this.f28384e.a();
        try {
            boolean equals = b().equals(obj);
            if (a10 != null) {
                a10.close();
            }
            return equals;
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
    public int hashCode() {
        a1 a10 = this.f28384e.a();
        try {
            int hashCode = b().hashCode();
            if (a10 != null) {
                a10.close();
            }
            return hashCode;
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

    @Override // java.util.Queue
    public boolean offer(Object obj) {
        a1 a10 = this.f28384e.a();
        try {
            boolean offer = b().offer(obj);
            if (a10 != null) {
                a10.close();
            }
            return offer;
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

    @Override // java.util.Queue
    public Object peek() {
        a1 a10 = this.f28384e.a();
        try {
            Object peek = b().peek();
            if (a10 != null) {
                a10.close();
            }
            return peek;
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

    @Override // java.util.Queue
    public Object poll() {
        a1 a10 = this.f28384e.a();
        try {
            Object poll = b().poll();
            if (a10 != null) {
                a10.close();
            }
            return poll;
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

    @Override // java.util.Queue
    public Object remove() {
        a1 a10 = this.f28384e.a();
        try {
            Object remove = b().remove();
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
    public Object[] toArray() {
        a1 a10 = this.f28384e.a();
        try {
            Object[] array = b().toArray();
            if (a10 != null) {
                a10.close();
            }
            return array;
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
    public Object[] toArray(Object[] objArr) {
        a1 a10 = this.f28384e.a();
        try {
            Object[] array = b().toArray(objArr);
            if (a10 != null) {
                a10.close();
            }
            return array;
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
